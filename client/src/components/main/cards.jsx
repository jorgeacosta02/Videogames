import React from "react";
import Card from "./card";
import NameNotFound from "./nameNotFound";
import styles from './cards.module.css';
import { useSelector } from "react-redux";
import { itemsPerPage } from "./navBar";

const Cards =({ display })=>{
  console.log('display in Cards', display);
  const currentPage = useSelector(state => state.currentPage);
  const lastItem = currentPage + itemsPerPage;
  const pagin = [...display.slice(currentPage,lastItem)];
  
  return(
      <div className={styles.cards}>
            {typeof(display[0]) === 'string'?
            <NameNotFound/>:
            pagin.map(game => (
              <Card
                img={game.image?game.image:game.background_image}
                name={game.name}
                id={game.id}
                key={game.id}
                genres={typeof(game.genres[0])!=='string'?
                game.genres.map(g => g.name).join(', '):
                game.genres.join(', ')
                }
                rating={game.rating}
              />
            ))}
      </div>
  )
};

export default Cards;

