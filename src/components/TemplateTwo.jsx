import { useForm } from "react-hook-form"

const TemplateTwo = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <select {...register("gender")}>
          <option value="female">01</option>
          <option value="male">2</option>
          <option value="other">3</option>
        </select>
        <input type="submit" />
      </form>
    )
}

export default TemplateTwo
