import React, {useState} from 'react';

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {

    const [starsRender, setStarsRender] = useState<number>(0);

    return (
        <div>
            <button onClick={ () => {setStarsRender(0)} }>Reset</button>
            <Star selected={ starsRender > 0 }/><button onClick={ () => {setStarsRender(1)} }>1</button>
            <Star selected={ starsRender > 1 }/><button onClick={ () => {setStarsRender(2)} }>2</button>
            <Star selected={ starsRender > 2 }/><button onClick={ () => {setStarsRender(3)} }>3</button>
            <Star selected={ starsRender > 3 }/><button onClick={ () => {setStarsRender(4)} }>4</button>
            <Star selected={ starsRender > 4 }/><button onClick={ () => {setStarsRender(5)} }>5</button>
        </div>
    );
};

type StarPropsType = {
    selected: boolean

}

function Star(props: StarPropsType) {

   return props.selected ? <span><b>Star</b></span> : <span>Star</span>
}