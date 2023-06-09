import { BsTrash3Fill } from 'react-icons/bs'

export default function CardProduct({ product, removeProduct}) {
  return (
    <>
      <li>
        <p>{ product.name }</p>
        <p>{ `R$ ${product.price}` }</p>
        {
          product.impost === '6.5'
          ? <p>{ `R$ ${ ((product.price * 5.30) + (product.price * 5.30 * 0.065)).toFixed(2) }` }</p>
          : <p>{ `R$ ${ (product.price * 5.30).toFixed(2) }` }</p>
        }
        <button
          onClick={ removeProduct }
        >
          <BsTrash3Fill />
        </button>
      </li>
    </>
  );
}