import comment from '../schema/commentSchema.js';
import Comment from '../schema/commentSchema.js';
export const newComment = async (request, response) => {
   try{
      const comment = new Comment(request.body);
      comment.save();
      response.status(200).json('Comment saved successfully');
   }catch(error){
      response.status(500).json(error);
   }
}
export const getComment = async (request, response) => {
   try{
      const comments = await Comment.find({ postId: request.params.id});
      response.status(200).json(comments);
   }catch(error){
      response.status(500).json(error);
   }
}
export const deleteComment = async (request, response) => {
   try{
      const comment = await Comment.findById(request.params.id);
      await comment.delete();
      response.status(200).json(comment);
   }catch(error){
      response.status(500).json(error);
   }
}