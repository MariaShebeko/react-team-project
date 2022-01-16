import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../redux/formSlice';
import { getUser } from '../../redux/selectors';
import { nanoid } from 'nanoid';

export default function OrderForm() {
  // const orderForm = useSelector(getUser);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    data.id = nanoid();
    console.log('submit', data);
    return dispatch(add(data));
  };
  return (
    <>
      <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            // defaultValue="test"
            {...register('name')}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            // defaultValue="test"
            {...register('email')}
          />
          <input
            type="text"
            name="Phone number"
            placeholder="Phone number"
            // defaultValue="test"
            {...register('number')}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <select {...register('tariff')}>
            <option value="tariff plan">Choose tariff plan</option>
            <option value="free">free</option>
            <option value="standart">standart</option>
            <option value="premium">premium</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
