export default function Friend({ friend }) {
  // instead of writting by friend.name or friend.email we will destructure them first we will use as we need like this.
  const { name, email, phone } = friend;
  return (
    <div className="card">
      {/* <h3>Name : {friend.name}</h3>
      <p>Email : {friend.email}</p> */}
      {/* using by destructuring */}
      <h3>Name : {name}</h3>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
    </div>
  );
}
