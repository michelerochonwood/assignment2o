import {useForm} from "react-hook-form";

function AddReference() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className="container">
            <h3>Add a reference</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="pb-3">
                    <label for="name">Name:</label>
                    <input name="name" {...register("name", {required: true})} style={{ width: "300px" }}/>
                    {errors.name && <span className="text-danger ms-2">Name is required</span>}
                </fieldset>
                <fieldset className="pb-3">
                    <label for="position">Position:</label>
                    <input name="position" {...register("position", {required: true})} style={{ width: "300px" }}/>
                    {errors.position && <span className="text-danger ms-2">Position is required</span>}
                </fieldset>
                <fieldset className="pb-3">
                    <label for="organization">Organization:</label>
                    <input name="organization" {...register("organization", {required: true})} style={{ width: "300px" }}/>
                    {errors.organization && <span className="text-danger ms-2">Organization is required</span>}
                </fieldset>
                <fieldset className="pb-3">
                    <label for="reference">Reference:</label>
                    <textarea name="reference" {...register("reference", {required: true})}></textarea>
                    {errors.reference && <span className="text-danger ms-2">Reference is required</span>}
                </fieldset>
                <button className="micheleButton2"><i className="bi bi-plus-circle"></i>Add Reference</button>
            </form>
        </div>
    )

}
export default AddReference;