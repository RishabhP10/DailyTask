export const TaskAdd = () => {
  return (
    <section className="addTask">
        <form>
            <input type="text" name="task" autoComplete="off" placeholder="Add Task" maxLength= "50" />
            <button type="submit">Add</button>
        </form>

    </section> 
  )
}
