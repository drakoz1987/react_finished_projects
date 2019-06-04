import React from 'react';
import CommentContent from './CommentContent';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

let publishedDate = [
  'Yesterday at 3:00PM','Yesterday at 5:00PM','Today at 6:00AM','Today at 9:30AM','Today at 5:30PM','Today at 6:00PM','Today at 11:00PM'
]

let MainContent = (props) => {
  return(
    <div className='MainContent'>
      <div className='ui container comments'>
        {publishedDate.map((date)=>{
          return(
            <ApprovalCard>
              <CommentContent
                avatar={faker.image.avatar()}
                author={faker.name.firstName() + ' ' + faker.name.lastName()}
                date={date}
                text={faker.lorem.sentence()}
              />
            </ApprovalCard>
          )
        })}
      </div>
    </div>
  )
}

export default MainContent;
