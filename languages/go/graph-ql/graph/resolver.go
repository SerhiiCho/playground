package graph

import "github.com/SerhiiCho/graph_ql/graph/model"

//go:generate go run github.com/99designs/gqlgen

type Resolver struct {
	videos []*model.Video
}
