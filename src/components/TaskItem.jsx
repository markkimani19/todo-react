import Button from './Button';
import Input from './Input';

const TaskItem = ({ task }) => {
 HEAD

	const { completed, title } = task;

	function handleClick(taskName) {
		alert(`The clicked task is: ${taskName}`);
	}

 upstream/main
	return (
		<div className="task">
			<Input
				type="checkbox"
				className="checkbox"
				checked={completed === true}
				onChange={() => console.log('Hi')}
			/>

			<span>{title}</span>

 HEAD
			<Button buttonClass="delete-button"></Button>
			<Button buttonClass="delete-button" onClick={() => handleClick(title)}>
 upstream/main
				<i className="fa-solid fa-trash"></i>
			</Button>
		</div>
	);
};

export default TaskItem;
