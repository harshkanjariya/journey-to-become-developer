export default function Container(props: any) {
  return <div style={{
    maxWidth: 1200
  }}>
    {props.children}
  </div>
}