import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import skills from '../serph/server';

export default function Experiences() {
    const [practices, setPractices] = useState(skills.practices);
    const [technologies, setTechnologies] = useState(
        Object.keys(skills)
            .slice(1, 8)
            .map(key => ({ title: skills[key].title, items: skills[key].items }))
    );

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;

        if (source.droppableId === 'practices') {
            const newPractices = Array.from(practices);
            const [removed] = newPractices.splice(source.index, 1);
            newPractices.splice(destination.index, 0, removed);
            setPractices(newPractices);
        } else {
            const newTechnologies = Array.from(technologies);
            const sourceIndex = parseInt(source.droppableId.split('-')[1]);
            const destinationIndex = parseInt(destination.droppableId.split('-')[1]);

            const [removed] = newTechnologies[sourceIndex].items.splice(source.index, 1);
            newTechnologies[destinationIndex].items.splice(destination.index, 0, removed);
            setTechnologies(newTechnologies);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <section className="row">
                <div className="col-md-5">
                    <div className="box-part text-center">
                        <h6 className="subtitle"> Practicas </h6>
                        <h5>  Practices  </h5>
                        <Droppable droppableId="practices">
                            {(provided) => (
                                <ul className="practices" ref={provided.innerRef} {...provided.droppableProps}>
                                    {practices.map((item, index) => (
                                        <Draggable key={index} draggableId={`practice-${index}`} index={index}>
                                            {(provided) => (
                                                <li
                                                    className="subpractices"
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <i></i> {item}
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                </div>

                <div className="col-md-7">
                    <h6 className="subtitle"> Tecnologías </h6>
                    <h5> Technology </h5>

                    {technologies.map((category, categoryIndex) => (
                        <article className="boxitemrow" key={categoryIndex}>
                            <div className="boxitem">{category.title}</div>
                            <Droppable droppableId={`technology-${categoryIndex}`}>
                                {(provided) => (
                                    <div className="contsecond" ref={provided.innerRef} {...provided.droppableProps}>
                                        {category.items ? (
                                            category.items.map((item, itemIndex) => (
                                                <Draggable key={itemIndex} draggableId={`technology-${categoryIndex}-${itemIndex}`} index={itemIndex}>
                                                    {(provided) => (
                                                        <li
                                                            className="boxsecond"
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={provided.innerRef}
                                                        >
                                                            <h4>{typeof item === 'object' ? item.language : item}</h4>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))
                                        ) : null}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </article>
                    ))}
                </div>
            </section>
        </DragDropContext>
    );
}
