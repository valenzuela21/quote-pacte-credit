const INITIAL_STATE = {
    data: {},
}

export function actionApp( state= INITIAL_STATE, action){
    switch(action.type){
        case 'CALCULATE':
                const {title_service, value_min, value_max, value_pressing, txtFormat, value_moth, option, tax, sure, iva, technology, view, result, cal_interest,
                    cal_iva, cal_mount_route, cal_technology, cal_sure } = action.param;

                let d = new Date();
                    d.setTime(Date.now());


                return {
                    data: {
                        service : title_service,
                        month : value_moth,
                        date  : d,
                        value_pressing : txtFormat,
                        tax: tax,
                        sure: sure,
                        iva: iva,
                        technology: technology,
                        view: view,
                        calinterest: cal_interest,
                        caliva: cal_iva,
                        calmountroute: cal_mount_route,
                        caltechnology: cal_technology,
                        calsure: cal_sure,
                        result: result,
                        
                    }
                };
                
        default:
            return state;
    }
}