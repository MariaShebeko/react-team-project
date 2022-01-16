export default function OrderForm() {
  return (
    <>
      <form>
        <div>
          <input type="text" name="name" placeholder="Full name" />
          <input type="text" name="name" placeholder="Email" />
          <input type="text" name="name" placeholder="Phone number" />
          <select>
            <option value="number" disabled selected>
              Choose tariff plan
            </option>
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
