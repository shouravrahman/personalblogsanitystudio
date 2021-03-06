// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		{
			name: 'author',
			type: 'document',
			title: 'Author',
			fields: [
				{
					name: 'name',
					type: 'string',
					title: 'Name',
				},
				{
					name: 'avatar',
					type: 'image',
					title: 'Avatar',
				},
			],
		},
		{
			name: 'blog',
			type: 'document',
			title: 'Blog',
			fields: [
				{
					name: 'title',
					type: 'string',
					title: 'Title',
				},
				{
					name: 'subtitle',
					type: 'string',
					title: 'Subtitle',
				},
				{
					name: 'coverImage',
					type: 'image',
					title: 'Cover Image',
                    options: {
								hotspot: true,
							},
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Description',
						},
					],
				},
				{
					name: 'content',
					title: 'Content',
					type: 'array',
					of: [
						{
							type: 'block',
						},
						{
							type: 'image',
							fields: [
                                {
                                  type: 'string',
									name: 'position',
									title: 'Image Position',  
                                    options:{
                                    list:[
                                        {title:'Center',value:'center'},
                                         {title:'Left',value:'left'},
                                         {title:'Right',value:'right'}
                                    ],
                                        layout:'radio',
                                    isHighlighted: true
                                    }
                                },
								{
									type: 'text',
									name: 'alt',
									title: 'Description',
									options: {
										isHighlighted: true,
									},
								},
							],
							options: {
								hotspot: true,
							},
						},
						{
							type: 'code',
							options: {
								withFilename: true,
							},
						},
					],
				},
				{
					name: 'date',
					type: 'datetime',
					title: 'Date',
				},
				{
					name: 'author',
					title: 'Author',
					type: 'reference',
					to: [{ type: 'author' }],
				},
				{
					name: 'slug',
					type: 'slug',
					title: 'Slug',
				},
			],
		},
	]),
})
