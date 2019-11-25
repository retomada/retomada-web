import React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { getAgenda } from '../../../services/service';


class TimelineView extends React.Component{
    constructor(){
        super();
        this.state = {
            agenda: [
                {
                    title: "Loading",
                    date: "Loading",
                    description: "Loading"
                }
            ],
        };
    }

    componentDidMount(){
        getAgenda().then(response => {
            this.setState({ agenda: response });
        })
    }
    render(){
        const { agenda } = this.state;
        return(
            <div>
                <Timeline>
                    {agenda.map((data) => {
                        return(
                            <TimelineEvent 
                                title={data.title}
                                titleStyle={{color: '#2962FF'}}

                                createdAt={data.date}
                                icon={<i className="material-icons md-18">event</i>}
                                iconColor="#3579e6"
                            >
                                <p className="event-description">{data.description}</p>
                            </TimelineEvent>
                        )
                    })}
                </Timeline>
            </div>
        );
    };
}
export default TimelineView;



