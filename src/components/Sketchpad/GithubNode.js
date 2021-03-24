import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import WHIcon from '../../styles/assets/icons8-webhook.svg'

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        // onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div style={{padding:10, borderStyle:"solid", backgroundColor:"#fff", borderColor:"#0041d0", borderWidth:1, borderRadius:3, fontSize:12}}>
          {/* <img src={WHIcon} alt="webhook icon"/> */}
          <p style={{margin:0}}>Github</p>
      </div>
      <Handle
        type="source"
        position="right"
        style={{ background: '#555' }}
      />
    </>
  );
});