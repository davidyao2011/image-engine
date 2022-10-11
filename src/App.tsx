import {Title} from './components/Title';
import {Form} from './components/Form';
import { useFormQuery } from './hooks';

const App = () => {

  const {handleSubmit, query} = useFormQuery();
  return (
    <div>
    <Title/>
    <Form handleSubmit = {handleSubmit} />
    </div>
  )
}

export default App;