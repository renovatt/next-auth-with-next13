import { LabelHTMLAttributes } from 'react'

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label className="text-sm text-zinc-600 flex items-center justify-between"
            {...props} />
    )
}

export default Label