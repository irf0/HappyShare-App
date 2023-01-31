const pin = {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    //Post Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    //Post Description
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    //Post URL
    {
      name: 'destination',
      title: 'Destination',
      type: 'url',
    },
    //Post Category
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    //Post main content
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    //Details of the user who posted
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },

    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{type: 'save'}],
    },

    {
      name: 'comment',
      title: 'Comment',
      type: 'array',
      of: [{type: 'comment'}],
    },
  ],
}
export default pin
