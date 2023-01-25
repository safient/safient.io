import styled from "styled-components";

export const TeamCardContainer = styled.div`
  background: rgba(42, 43, 49, 0.41);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  max-width: 65rem;
  // border: 1px solid rgba(132, 154, 170, 0.52);
  .name {
    color: #fff;
  }
  .description {
    margin-top: 1rem;
    line-height: 30px;
    font-weight: 400;
  }
  .profile {
    margin-top: 0.1rem;
    color: #6663fd;
  }
  .social-icons {
    fill: green;
  }

  .name {
    text-align: start;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 36px;
    color: #fff;
  }

  p {
    font-size: 2rem;
    font-weight: 500;
    color: 9ba 94px;
    line-height: 36px;
    margin-top: 2rem;
  }
  img {
    border-radius: 8px;
    min-width: 20rem;
    height: 20rem;
    object-fit: cover;
  }
  ul {
    display: flex;
    color: #fff;
    margin-top: 2rem;
    gap: 2rem;
    cursor: pointer;
  }
  i {
    font-size: 2.4rem;
    &:hover {
      color: #6663fd;
    }
  }
  a {
    color: #fff;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    img {
      object-fit: cover;
      min-height: 300px;
    }
  }
`;

export const TeamsCard = (props) => {
  const { profileAvatar, name, description, designation, socialLinks } = props;

  return (
    <TeamCardContainer>
      <img src={profileAvatar} alt="avatar" />

      <div>
        <h4 className="name">{name}</h4>
        <p className="profile">{designation}</p>

        <p className="description">{description}</p>

        <ul>
          {socialLinks.gitHub && (
            <li>
              <a href={socialLinks.gitHub} target="_next">
                <i className="fa-brands fa-square-github" />
              </a>
            </li>
          )}
          {socialLinks.linkedIn && (
            <li>
              <a href={socialLinks.linkedIn} target="_next">
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
          )}
          {socialLinks.twitter && (
            <li>
              <a href={socialLinks.twitter}>
                <i className="fa-brands fa-square-twitter" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </TeamCardContainer>
  );
};
