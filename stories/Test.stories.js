import docs from './Test.mdx'

export default {
    title: 'Test',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Test = () => `
<div data-trigger>
    <p>Testing... you should see some output in browser console if JS has fired!</p>
</div>
`
