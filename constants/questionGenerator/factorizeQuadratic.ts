interface arg {
    leadingCoefficientRange: [number]
    factorizeIntegerOut: boolean
}

const factorizeQuadratics = (arg: arg) => {
    return {
        leadingCoefficientRange: arg.leadingCoefficientRange,
        factorizeIntegerOut: arg.factorizeIntegerOut
    }
}

export default factorizeQuadratics;