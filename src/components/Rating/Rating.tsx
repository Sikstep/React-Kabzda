import React, {useState} from 'react';

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {

    const [starsRender, setStarsRender] = useState<number>(0);

    return (
        <div>

            <Star selected={ starsRender > 0 } setValue={setStarsRender} value={1}/>
            <Star selected={ starsRender > 1 } setValue={setStarsRender} value={2}/>
            <Star selected={ starsRender > 2 } setValue={setStarsRender} value={3}/>
            <Star selected={ starsRender > 3 } setValue={setStarsRender} value={4}/>
            <Star selected={ starsRender > 4 } setValue={setStarsRender} value={5}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void

}

function Star(props: StarPropsType) {
    // props.selected ? <span><b>Star</b></span> : <span>Star</span>
   return <span onClick={ () => props.setValue(props.value) }> {props.selected ? <b>Star </b> : 'Star ' } </span>

}