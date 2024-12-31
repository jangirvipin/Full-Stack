export default function Card({ item }:any){
  //console.log(item);
  //console.log(item.category)
    return(
        <>
       <div className="card dark:text-black bg-base-100 w-96 shadow-xl hover:scale-105 duration-150">
  <figure>
    <img
      src="https://img.freepik.com/premium-photo/stack-colorful-books_1207614-22471.jpg?w=740"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </>
    )
}