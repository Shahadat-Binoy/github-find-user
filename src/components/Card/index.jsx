/* eslint-disable react/prop-types */
const Card = ({ repo }) => {
  return (
    <div className="repository">
      <h3>{repo?.name}</h3>
      <p>
        <strong>Language:</strong>
        {repo.language || "Not Specified"}
      </p>
      <p>
        <strong>Stars:</strong> {repo.stargazers_count}
      </p>
      <p>
        <a href={`${repo.url}/zipball`} target="_blank" rel="noreferrer">
          Download as ZIP
        </a>
      </p>
    </div>
  );
};

export default Card;
