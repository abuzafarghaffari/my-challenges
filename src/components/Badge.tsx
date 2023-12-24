const  Badge:React.FC<{caption:number}>= ({ caption })=> {
  return <span className="badge">{caption}</span>;
}

export default Badge;