import './TaskSection.css';
import TaskDescription from './subComponentes/TaskDescription'
import TaskStatus from './subComponentes/TaskStatus'


function TaskSection() {
    return (
      <div className="task-section">
        <TaskDescription/>
        <TaskStatus/>
      </div>
    );
  }
  
  export default TaskSection;