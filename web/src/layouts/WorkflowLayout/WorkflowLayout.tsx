type WorkflowLayoutProps = {
  children?: React.ReactNode
}

const WorkflowLayout = ({ children }: WorkflowLayoutProps) => {
  return (
    <div>
      <h1>Workflow Layout</h1>
      <div>{children}</div>
    </div>
  )
}

export default WorkflowLayout
