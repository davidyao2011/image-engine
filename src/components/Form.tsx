
interface IForm {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>)=> void;
}

export const Form = ({handleSubmit} : IForm) => {
    return (
        <form onSubmit= {handleSubmit}>
            <input type="text" placeholder="Example: flash" />
            <button>Search</button>
        </form>
    )
}