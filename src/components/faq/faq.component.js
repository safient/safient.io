import { useState } from 'react';
import { FaqContainer, QuestionsContainer, AnswersContainer, FaqSection, ItemsContainer } from './faq.component.styles';

export const Item = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <FaqSection>
      <FaqContainer>
        <QuestionsContainer isActive onClick={() => setIsActive((show) => !show)}>
          <p>{title}</p>
          <p>{isActive ? '-' : '+'}</p>
        </QuestionsContainer>
        {isActive && (
          <AnswersContainer isActive>
            <p>{children}</p>
          </AnswersContainer>
        )}
      </FaqContainer>
    </FaqSection>
  );
};

export const Faq = () => {
  return (
    <ItemsContainer>
      <h2>Frequently asked Questions</h2>
      <Item title='Who should use safient?'>
        If you hold valuable crypto assets, but currently do not have a secure backup or inheritance plan, Safient is
        for you.
      </Item>
      <Item title='Where is the safe information stored?'>
        Encrypted safe information is stored on IPFS decentralized storage network using Ceramic Network and Textile
        Buckets. Even though the safe is stored on decentralized storage, it cannot be recovered without the guardians
        collectively reconstructing it.
      </Item>
      <Item title='Can the beneficiary access the safe information?'>
        The safe content cannot be accessed by the beneficiary unless the beneficiary claim is passed.
      </Item>
      <Item title='Does the beneficiary get to know what assets are stored?'>
        The safe creator can share the crypto portfolio and the type of data stored on a need to know basis that is end
        to end encrypted for the beneficiary.
      </Item>
      <Item title='Can I update the safe?'>Yes, the safe can be updated any number of times.</Item>
      <Item title='Can I delete the safe?'>Yes, the safe can be destroyed by making it unrecoverable.</Item>
    </ItemsContainer>
  );
};
