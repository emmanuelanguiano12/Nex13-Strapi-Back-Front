interface Props { 
    text: String
}

const PageHeader = ({text} : Props) => {
  return (
    <>
        <h1 className="text-5xl font-extrabold dark:text-blue text-center">{text}</h1>
    </>
  )
}

export default PageHeader