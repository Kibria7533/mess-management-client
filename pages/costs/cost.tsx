import { Suspense } from 'react';
import Cost from '../../lib/Cost'

const CostPage = () => {
    return <>
    <Suspense fallback={<h1> Loading data .....</h1>}>
        <Cost />
    </Suspense>
    
    </>

}

export default CostPage;