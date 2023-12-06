import {useState} from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btntext}) {

    const [categories, setCategories] = useState([])

    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'conten-type': 'application/json'
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch(err => console.log(err))

    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="Number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select 
            name="category_id" 
            text="Selecione a Categoria"
            options={categories}
            />
            <SubmitButton text={btntext}/>
        </form>
    )
}

export default ProjectForm