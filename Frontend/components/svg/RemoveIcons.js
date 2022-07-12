
const RemoveIcons = ({fill, ...props}) => {
    return(
        <svg {...props} id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
            <path d="  M25,10H7v17c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V10z" fill="none" id="XMLID_129_" stroke={fill || "#000000"} />
            <path d="  M20,7h-8V5c0-1.105,0.895-2,2-2h4c1.105,0,2,0.895,2,2V7z" fill="none" id="XMLID_145_" stroke={fill || "#000000"}  />
            <path d="  M28,10H4V8c0-0.552,0.448-1,1-1h22c0.552,0,1,0.448,1,1V10z" fill="none" id="XMLID_146_" stroke={fill || "#000000"}  />
            <line fill="none" id="XMLID_148_" stroke={fill || "#000000"}  x1="16" x2="16" y1="15" y2="24" />
            <line fill="none" id="XMLID_147_" stroke={fill || "#000000"}  x1="12" x2="12" y1="15" y2="24" />
            <line fill="none" id="XMLID_149_" stroke={fill || "#000000"}  x1="20" x2="20" y1="15" y2="24" />
        </svg>
    )
}

export default RemoveIcons