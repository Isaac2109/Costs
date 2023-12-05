import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btntext}) {
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
            <Select name="category_id" text="Selecione a Categoria"/>
            <SubmitButton text={btntext}/>
        </form>
    )
}

export default ProjectForm