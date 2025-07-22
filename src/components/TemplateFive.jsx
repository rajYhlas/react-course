import React from 'react'
import { useForm } from 'react-hook-form';

const TemplateFive = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          hobbies: [],
          gender: ""
        }
      });

      const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert(JSON.stringify(data, null, 2));
      };

      return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">React Hook Form Example</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Hobbies (Checkboxes):</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="reading"
                  {...register("hobbies")}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                Reading
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="gaming"
                  {...register("hobbies")}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                Gaming
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="sports"
                  {...register("hobbies")}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                Sports
              </label>
            </div>
            {errors.hobbies && (
              <p className="text-red-500 text-sm mt-2">{errors.hobbies.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Gender (Radio Buttons):</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="male"
                  {...register("gender", { required: "Please select a gender" })}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="female"
                  {...register("gender", { required: "Please select a gender" })}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="other"
                  {...register("gender", { required: "Please select a gender" })}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                Other
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-2">{errors.gender.message}</p>
            )}
          </div>

          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      );
}

export default TemplateFive
