const SingleRocket = ({
  /* eslint-disable react/prop-types */
  title, description, image,
}) => {
  
  return (
    <div>
      <div>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRocket;