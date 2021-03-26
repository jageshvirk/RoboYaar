import React from 'react';

const Card= (props)=>{
	return(
		<div className ='tc bg-light-blue dib pa3 ma3 grow bw2 shadow-5'>
			<img alt= 'robotPic' src={`https://robohash.org/${props.id}.png`}/>
				<div>
					<h2> {props.name}</h2>
					<p>{props.email}</p>
				</div>
		</div>

		);
} 

export default Card;