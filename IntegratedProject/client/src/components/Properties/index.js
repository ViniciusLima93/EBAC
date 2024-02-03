import React, { Component } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const baseUrl = 'http://localhost:3333/properties'

const initialState = {
    propertie: {
        _id: '',
        type: '',
        title: '',
        description: ''
    },
    list: []
}

export default class Properties extends Component {

    /* Define estado inicial*/
    constructor(props) {
        super(props)
        this.state = { ...initialState }
    }
    
    /* Limpa formulário */
    clear(){
        this.setState({ propertie : initialState.propertie })
    }

    /* Cria Imóvel */
    save(){
        const propertie= this.state.propertie
        const method  = propertie._id? 'put' : 'post'
        const url = propertie._id? `${baseUrl}/${propertie._id }` : `${baseUrl}`
        axios[method](url, propertie)
            .then(response => {
                // promisse
                const updateList = this.getUpdatedList(response.data);
                console.log(updateList)
                this.setState({ list: updateList, propertie: initialState.propertie})
            })
            .catch((error) => {
                console.log(error)
            })

    }


    /* Atualiza lista de imóveis */
    getUpdatedList(propertie) {
        let updatedList = [...this.state.list];
        
       
        const index = updatedList.findIndex(p => p._id === propertie._id);
        if (index !== -1) {
            updatedList[index] = propertie;
        } else {
            
            updatedList.unshift(propertie);
        }
    
        return updatedList;
    }


      /* Atualiza Imóvel */
      update(event) {
        const propertie = { ...this.state.propertie }
        propertie[event.target.name] = event.target.value
        this.setState({ propertie })
    }
    


    componentDidMount(){
        this.loadProperties();
    }

    loadProperties ( ) {
        axios.get(baseUrl)
        .then(response => {
            this.setState({ list: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
    }
       

    /* Lista Imóveis */
    mapProperties(properties){
        return properties?.map( response  => {
            return this.getListItem(response)
        })
    }

    renderProperties(){
        const properties = this.state.list
        return ( <List>{ this.mapProperties(properties) }</List>)
    }

    getListItem(response){

        return (
            <ListItem  
                alignItems="flex-start"
                key={response._id}>
                    <ListItemAvatar>
                        <Avatar alt="Foto" src="https://picsum.photos/200/300?random=1" />
                    </ListItemAvatar>
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline', maxHeight: '600px' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <Tooltip title={ response.type }>
                                <h3>{response.title}</h3> 
                            </Tooltip>
                            <p>{response.description}</p>
                        </Typography>
                    </React.Fragment>
                    <Divider variant="inset" component="li" />
                    <div className='actions'>
                        <button
                            className='btn-edit'
                            onClick={ () => this.load(response)}>
                            Alterar</button>
            
                        <button
                            className='btn-delete'
                            onClick={ () => this.remove(response)}>
                            Deletar</button>
                    </div>
            </ListItem>
        )

    }

    /* Carrega Imóvel */
    load(propertie) {
        this.setState({ propertie })
    }

    /* Remove Imóvel */
    remove(propertie) {
        console.log(propertie)
        axios.delete(`${baseUrl}/${propertie._id }`)
            .then(response => {
                const list = this.state.list.filter( p => p._id !== propertie._id )
                this.setState({ list })
            })
    }

     /* Renderiza formulário de cadastro */
    renderForm() {
      return (
        <Box
          component="form"
          sx={{
            display: 'flex',
            maxHeight: '500px',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }}
          noValidate
          autoComplete="off"
        >
          {this.state.propertie._id}
          <TextField
            variant="outlined"
            type="text"
            name="title"
            value={this.state.propertie.title}
            onChange={(e) => this.update(e)}
            label="Título do Anúncio"
            style={{ marginBottom: '10px' }}
          />
  
          <TextField
            variant="outlined"
            type="text"
            name="type"
            value={this.state.propertie.type}
            onChange={(e) => this.update(e)}
            label="Tipo do Imóvel"
            style={{ marginBottom: '10px' }}
          />
  
          <TextField
            variant="outlined"
            type="text"
            name="description"
            value={this.state.propertie.description}
            onChange={(e) => this.update(e)}
            label="Descrição"
            multiline
            rows={3}
            style={{ marginBottom: '20px' }}
          />
  
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => this.save(e)}
            >
              Salvar
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={(e) => this.clear(e)}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      );
    }

    /* Renderiza formulário e lista */
    render() {
        console.log(this.state.list)
        return( 
            <div className='content'>
                {this.renderForm()}
                {this.renderProperties()}
            </div>)
    }

}