import { useLocalStorage } from "./useLocalStorage"

export const useForm = (key, initialValues, cb) => {
    const [values, setValues] = useLocalStorage(key, initialValues)

    const clearForm = e => {
        setValues(initialValues);
      }

    const handleSubmit = e => {
        if (e) e.preventDefault();
        cb();
      }

      const handleChanges = e => {
        setValues({...values, [e.target.name]: e.target.value});
      }

    return [values, clearForm, handleChanges, handleSubmit];
}