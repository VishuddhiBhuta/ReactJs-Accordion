import React from 'react'
import './accordion.css'



/**
 * 
 * Parent:
 *      App
 * 
 */

export default class AccordionNew extends React.Component {
    state = {
        data: [
            {
                title: "Panel heading 1",
                content: "Some text...."
            },
            {
                title: "Panel heading 2",
                content: "Some other text...."
            },
            {
                title: "Panel heading 3",
                content: "Some dummy text goes here...."
            }
        ],
        expandedIndex: -1 //Close all tabs
    }

    //Click 
    handleClick = (clickedIndex) => {
        this.setState({
            expandedIndex: clickedIndex //Initialize the one on which you clicked [its passing index of clicked Item]
        });

        // Below code will enable the toggle state of item also.

        // this.setState({
        //     expandedIndex: this.state.expandedIndex === clickedIndex ? -1 : clickedIndex
        // })
    }

    render() {
        console.log(this.state.expandedIndex)
        return (
            this.state.data.map((items, index) => {
                return (
                    <div className="panel" key={items.title + index}>
                        <div
                            className="panel-title"
                            onClick={() => {
                                this.handleClick(index);
                            }}>
                            {this.state.data[index].title}
                        </div>
                        {index === this.state.expandedIndex &&
                            <div className="panel-content">
                                <p>{this.state.data[index].content}</p>
                            </div>
                        }
                    </div >
                )
            })
        )
    }
}