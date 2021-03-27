import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

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
          <p style={{margin:0}}>Webhook</p>
      </div>

      <Handle
        type="source"
        position="right"
        style={{ background: '#555' }}
      />
    </>
  );
});