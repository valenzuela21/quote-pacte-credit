const INITIAL_STATE = {
    data: {},
}

export function actionApp( state= INITIAL_STATE, action){
    switch(action.type){
        case 'CALCULATE':
                const {title_service, value_min, value_max, value_pressing, txtFormat, value_moth, option, tax, view, result } = action.param;

                let d = new Date();
                    d.setTime(Date.now());


                return {
                    data: {
                        service : title_service,
                        month : value_moth,
                        date  : d,
                        value_pressing : txtFormat,
                        tax: tax,
                        view: view,
                        result: result,
                        
                    }
                };
                
        default:
            return state;
    }
}