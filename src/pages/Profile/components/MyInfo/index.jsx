import { useForm } from 'react-hook-form';

import './MyInfo.css';

import { useEffect } from 'react';

const USER_DATA = 'userData';

const MyInfo = () => {
    const { handleSubmit, register, setValue } = useForm();

    useEffect(() => {
        try {          
            const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};

            setValue('name', userData?.name);
            setValue('age', userData?.age);
            setValue('email', userData?.email);
        } catch (error) {
            console.error(error);
        }
    }, [setValue]);

    const handleFormSubmit = (data) => {
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data));
            alert('Usuario actualizado');
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={'form'}>
             <label className={'label'}>
                Name
                <input {...register('name', { required: true, minLength: 1, maxLength: 120 })} className={'input'} />
            </label>
            <label className={'label'}>
                Email
                <input {...register('email', { required: true, min: 1, max: 200, })} className={'input'} />
            </label>
            <label className={'label'}>
                Age
                <input
                    {...register('age', { required: true, min: 1, max: 120, valueAsNumber: true })}
                    className={'input'}
                    type='number'
                />
            </label>
            <button type="submit" className={'submitButton'}>Save</button>
        </form>
    );
};

export default MyInfo;