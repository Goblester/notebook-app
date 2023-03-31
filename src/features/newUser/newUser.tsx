import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {usersActions} from "../../store/users";


export const NewUser: React.FC = React.memo(() => {

    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {name: '', email: '', phone: ''}})
    const dispatch = useDispatch()

    return (
        <form className="bg-gray-50 border-gray-300 border p-5 rounded-md drop-shadow-md"
              onSubmit={handleSubmit(newUser => {
                dispatch(usersActions.addUser(newUser));
              })}>
            <button type="submit"
                    className="rounded-md bg-blue-400 text-white px-5 py-2 active:bg-blue-500">
                Add User
            </button>

            <div className="flex flex-col gap-4 mt-4">
                <input className="border-2 px-4 py-2 border-gray-500 focus:border-gray-500 rounded-md w-full"
                       {...register('name', {
                           required: 'This field is required', minLength: {
                               value: 4,
                               message: 'minimum length is 4 symbols'
                           }
                       })}
                       placeholder="name"/>
                {errors.name?.message && <p className="text-red-500 text-xs">{errors.name?.message}</p>}
                <input className="border-2 px-4 py-2 border-gray-500 focus:border-gray-500 rounded-md w-full"
                       {...register('email', {
                           required: 'This field is required', minLength: {
                               value: 4,
                               message: 'minimum length is 4 symbols'
                           }
                       })}
                       placeholder="email"/>
                {errors.email?.message && <p className="text-red-500 text-xs">{errors.email?.message}</p>}
                <input className="border-2 px-4 py-2 border-gray-500 focus:border-gray-500 rounded-md w-full"
                       {...register('phone', {
                           required: 'This field is required', minLength: {
                               value: 4,
                               message: 'minimum length is 4 symbols'
                           }
                       })}
                       placeholder="phone"/>
                {errors.phone?.message && <p className="text-red-500 text-xs">{errors.phone?.message}</p>}
            </div>
        </form>
    )
});