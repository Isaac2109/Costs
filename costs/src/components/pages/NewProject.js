import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    return (
        <div className={styles.newproject_conteiner}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btntext="Criar Projeto"/>
        </div>
    )
}

export default NewProject