package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"math/rand"

	"github.com/SerhiiCho/graph_ql/graph/generated"
	"github.com/SerhiiCho/graph_ql/graph/model"
)

func (r *mutationResolver) CreateVideo(ctx context.Context, input model.NewVideo) (*model.Video, error) {
	video := &model.Video{
		ID:    fmt.Sprintf("T%d", rand.Int()),
		Title: input.Title,
		URL:   input.URL,
		Author: &model.User{
			ID:   input.UserID,
			Name: "user " + input.UserID,
		},
	}

	r.videos = append(r.videos, video)

	return video, nil
}

func (r *queryResolver) Videos(ctx context.Context) ([]*model.Video, error) {
	return r.videos, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
