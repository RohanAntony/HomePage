import React, { Component } from 'react';

class collapsibleArticle extends Component{

	constructor(props){
		super(props)
		this.state = {
			display: true
		}
	}

	toggleContent = () => {
		this.setState(prevState => {
			return {
				display: !prevState.display
			}
		})
	}

	render() {

		let displayClass = "content ";
		if(this.state.display)
			displayClass += "content-visible";
		else
			displayClass += "content-hidden";

		let downButtonClass = ""
		let upButtonClass = ""

		if(this.state.display)
			downButtonClass += " hidden"
		else
			upButtonClass += "hidden"

		let hashTag = "#" + this.props.heading

		return (
			<article class="article collapsible">
				<div class="heading" name={this.props.heading}>
					<span>{this.props.heading}</span>
					<span class={downButtonClass}><a href={hashTag} onClick={this.toggleContent}><i class="fas fa-caret-down icon"></i></a></span>
					<span class={upButtonClass}><a href={hashTag} onClick={this.toggleContent}><i class="fas fa-caret-up icon"></i></a></span>
				</div>
				<div class={displayClass}>
					{this.props.children}
				</div>
			</article>
		)
	}
}

export default collapsibleArticle;
