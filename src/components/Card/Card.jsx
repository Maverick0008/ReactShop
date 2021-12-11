import React from "react";
import Style from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from "../../context";

function Card({ id, title, img, price, onPlus, onFavorite, isFavorite = false,loading = false }) {
  const {itemAddedCart} = React.useContext(AppContext)
  // const [Added, setAdded] = React.useState(isAdded);
  const [Favorite, setFavorite] = React.useState(isFavorite)
  const handleClick = () => {
    onPlus({ id, parentId: id, title, img, price })
    // setAdded(!Added)
  }
  const onClickFavorite = () => {
    onFavorite({ id,parentId: id, title, img, price })
    setFavorite(!Favorite)
  }
  return (

    <div className={Style.item}>
      {
        loading ? <ContentLoader
          speed={2}
          width={270}
          height={210}
          viewBox="0 0 270 210"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"

        >
          <rect x="0" y="0" rx="0" ry="0" width="120" height="120" />
          <rect x="0" y="135" rx="0" ry="0" width="120" height="15" />
          <rect x="0" y="163" rx="0" ry="0" width="77" height="15" />
          <rect x="0" y="194" rx="0" ry="0" width="60" height="20" />
          <rect x="90" y="195" rx="0" ry="0" width="30" height="20" />
        </ContentLoader>
          : <>
            <img width={120} height={120} src={img} alt="productImg" />

            <h5>{title}</h5>
            <div className="d-flex junstify-between">
              <div className="d-flex align-center">
                <span className={Style.price}>Price:</span>
                <b>{price}$</b>
                {onPlus &&  <img width={20} height={20} className={Style.addToCard} onClick={handleClick} src={itemAddedCart(id) ? "/img/addedToCard.svg" : "/img/addToCard.svg"} alt="Add" />}
                {onFavorite && <img width={20} height={20} onClick={onClickFavorite} src={Favorite ? "/img/favorite_add.svg" : "/img/favorite.svg"} alt="favorite" />}
              </div>

            </div>
          </>
      }

    </div>
  )
}
export default Card;