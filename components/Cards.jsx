import React, { useState } from 'react';
import { Skills } from '../serph/Skills';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../src/styles/Cards.scss';

const Cards = () => {
  const [skills, setSkills] = useState(Skills);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedSkills = Array.from(skills);
    const [removed] = reorderedSkills.splice(result.source.index, 1);
    reorderedSkills.splice(result.destination.index, 0, removed);
    setSkills(reorderedSkills);
  };

  return (
    <div className="mainbg">
      <h6 className="subtitle">
        <i className="fa fa-network-wired"></i> Habilidades
      </h6>
      <h2> Soft skills </h2>
      <div className="mb-5"></div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="skills" direction="horizontal">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="containerx">
              {skills.map((skill, index) => (
                <Draggable key={skill.id} draggableId={skill.id} index={index}>
                  {(provided) => (
                    <div
                      className="face face1"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="content">
                        <i className="fa fa-door-open"></i>
                        <h3>{skill.habilidad}</h3>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Cards;
